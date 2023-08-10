// app shell with the header
import { useState, useEffect, useContext } from "react";
import React from "react";
import {
  IconMessages,
  IconComponents,
  IconApi,
  IconSettings,
} from "@tabler/icons-react";
import {
  AppShell,
  Header,
  Group,
  Burger,
  useMantineTheme,
  MediaQuery,
  Button,
  Center,
  Navbar,
  ThemeIcon,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/clerk-react";
import { ProjectContext } from "../contextv2/project";

export default function Shell() {
  const theme = useMantineTheme();
  const { isSignedIn } = useAuth();
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  const [openedNav, setOpenedNav] = useState(false);
  const location = useLocation();
  const isProjectPage =
    location.pathname.split("/").pop() !== "projects" &&
    location.pathname.split("/").includes("projects");

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-between",
              padding: "0 1rem",
            }}
          >
            <Button onClick={() => navigate("/projects")}>Chatmate</Button>

            <Group>
              <SignedOut>
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                  />
                </MediaQuery>
                <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                  <Group>
                    <Button
                      variant="default"
                      onClick={() => navigate("sign-up")}
                    >
                      Sign up
                    </Button>
                    <Button onClick={() => navigate("sign-in")}>Sign in</Button>
                  </Group>
                </MediaQuery>
              </SignedOut>
              <SignedIn>
                {isProjectPage && (
                  <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Burger
                      opened={openedNav}
                      onClick={() => setOpenedNav((o) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                    />
                  </MediaQuery>
                )}

                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </Group>
          </div>
        </Header>
      }
      navbar={
        !isProjectPage ? (
          <></>
        ) : (
          <Navbar
            height="100%"
            p="xs"
            hiddenBreakpoint="sm"
            hidden={!openedNav || !isProjectPage}
            width={{ sm: 200, lg: 300 }}
          >
            <Navbar.Section grow mt="xs">
              <MainLinks setOpenedNav={setOpenedNav} />
            </Navbar.Section>
          </Navbar>
        )
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Center>
        <Outlet />
      </Center>
    </AppShell>
  );
}

const data = [
  {
    icon: <IconMessages size="1rem" />,
    color: "blue",
    label: "Chat",
    path: "chat",
  },
  {
    icon: <IconComponents size="1rem" />,
    color: "teal",
    label: "Components",
    path: "components",
  },
  // { icon: <IconApi size="1rem" />, color: "violet", label: "API", path: "api" },
  {
    icon: <IconSettings size="1rem" />,
    color: "grape",
    label: "Other settings",
    path: "settings",
  },
];

function MainLinks({
  setOpenedNav,
}: {
  setOpenedNav: (opened: boolean) => void;
}) {
  const links = data.map((link) => (
    <MainLink {...link} key={link.label} setOpenedNav={setOpenedNav} />
  ));
  return <div>{links}</div>;
}

function MainLink({
  icon,
  color,
  label,
  path,
  setOpenedNav,
}: {
  icon: React.ReactNode;
  color: string;
  label: string;
  path: string;
  setOpenedNav: (opened: boolean) => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname.includes(path);
  const { project } = useContext(ProjectContext);

  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
        backgroundColor: isActive
          ? theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0]
          : "transparent",
      })}
      onClick={() => {
        navigate(`/projects/${project}/${path}`, { replace: true });
        setOpenedNav(false);
      }}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}
