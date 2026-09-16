"use client";

import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { bootstrapAdapter } from "../../preview/bootstrapRef/adapter";
import type { UsageDashboardProps } from "../registry";
import { SCREENS } from "./screens";

export function BootstrapUsage3({ system, active }: UsageDashboardProps) {
  React.useEffect(
     => bootstrapAdapter.mountTheme?.(system, active, document),
    [system, active],
  );

  const [screenKey, setScreenKey] = React.useState(SCREENS[0].key);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(undefined);
  const screen = SCREENS.find((s) => s.key === screenKey) ?? SCREENS[0];
  const Screen = screen.Screen;

  return (
    <bootstrapAdapter.Provider system={system} mode={active}>
      <div
        className="d-flex flex-column overflow-hidden"
        style={{
          background: "var(--semantic-bg-neutral-surface)",
          border:
            "var(--semantic-border-width-default) solid var(--semantic-border-neutral-subtle)",
          borderRadius: "var(--semantic-radius-container)",
          boxShadow: "var(--semantic-shadow-raised)",
          height: "max(20rem, calc(100dvh - 9rem))",
        }}
      >
        <Navbar
          bg="body-tertiary"
          className="flex-shrink-0 border-bottom"
          expand="md"
        >
          <Container fluid className="px-3">
            <Navbar.Brand>도서관</Navbar.Brand>
            <Navbar.Toggle aria-controls="library-nav" />
            <Navbar.Collapse id="library-nav">
              <Nav
                activeKey={screenKey}
                className="me-auto"
                onSelect={(key) => key && setScreenKey(key)}
              >
                {SCREENS.map((s) => (
                  <Nav.Link eventKey={s.key} key={s.key}>
                    {s.label}
                  </Nav.Link>
                ))}
              </Nav>
              <Navbar.Text>{system.baseTitle}</Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="flex-grow-1 overflow-y-auto p-3" style={{ minHeight: 0 }}>
          <div className="mb-3">
            <h2 style={{ fontSize: "1rem", fontWeight: 600 }}>{screen.label}</h2>
            <p style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "0.8125rem" }}>
              {screen.lede}
            </p>
          </div>
          <Screen onNavigate={setScreenKey} selectedId={selectedId} onSelect={setSelectedId} />
        </div>
      </div>
    </bootstrapAdapter.Provider>
  );
}
