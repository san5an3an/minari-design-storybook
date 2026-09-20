// @ts-nocheck
import { preview_LayoutDirection as LayoutDirection } from '@carbon/react';
import { preview_Text as Text } from '@carbon/react';
import mdx from './Text.mdx';


export default {
  title: 'Preview/preview_Text',
  component: Text,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const LayoutAndText = () => {
  return (
    <LayoutDirection dir="ltr">
      <p>
        Ipsum ipsa repellat doloribus magni architecto totam Laborum maxime
        ratione nobis voluptatibus facilis nostrum, necessitatibus magnam Maxime
        esse consequatur nemo sit repellat Dignissimos rem nobis hic
        reprehenderit ducimus? Fuga voluptatem?
      </p>
      <LayoutDirection dir="rtl">
        <Text as="p">
          المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك
          التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره
          أو يتجنب الشعور بالسعادة، ولكن بفضل هؤ.
        </Text>
      </LayoutDirection>
      <p>
        Ipsum ipsa repellat doloribus magni architecto totam Laborum maxime
        ratione nobis voluptatibus facilis nostrum, necessitatibus magnam Maxime
        esse consequatur nemo sit repellat Dignissimos rem nobis hic
        reprehenderit ducimus? Fuga voluptatem?
      </p>
    </LayoutDirection>
  );
};
