// @ts-nocheck
import React, { useMemo, useRef, useState } from 'react';
import { Avatar, Select, Spin } from 'antd';
import type { SelectProps } from 'antd';
import debounce from 'lodash/debounce';

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

function DebounceSelect<
  ValueType extends {
    key?: string;
    label: React.ReactNode;
    value: string | number;
    avatar?: string;
  } = any,
>({ fetchOptions, debounceTimeout = 300, ...props }: DebounceSelectProps<ValueType>) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>([]);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select
      labelInValue
      showSearch={{
        autoClearSearchValue: false,
        filterOption: false,
        onSearch: debounceFetcher,
      }}
      notFoundContent={fetching ? <Spin size="small" /> : '결과가 없어요'}
      {...props}
      options={options}
      optionRender={(option) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {option.data.avatar && <Avatar src={option.data.avatar} style={{ marginInlineEnd: 8 }} />}
          {option.label}
        </div>
      )}
    />
  );
}

// Usage of DebounceSelect
interface UserValue {
  label: string;
  value: string;
  avatar?: string;
}

async function fetchUserList(username: string): Promise<UserValue[]> {
  console.log('사용자를 받는 중', username);
  return fetch(`https://660d2bd96ddfa2943b33731c.mockapi.io/api/users/?search=${username}`)
    .then((res) => res.json())
    .then((res) => {
      const results = Array.isArray(res) ? res : [];
      return results.map<UserValue>((user) => ({
        label: user.name,
        value: user.id,
        avatar: user.avatar,
      }));
    })
    .catch(() => {
      console.log('가짜 데이터를 못 받았어요');
      return [];
    });
}

const App: React.FC = () => {
  const [value, setValue] = useState<UserValue[]>([]);

  return (
    <DebounceSelect
      mode="multiple"
      value={value}
      placeholder="사용자 고르기"
      fetchOptions={fetchUserList}
      style={{ width: '100%' }}
      onChange={(newValue) => {
        if (Array.isArray(newValue)) {
          setValue(newValue);
        }
      }}
    />
  );
};

export default App;