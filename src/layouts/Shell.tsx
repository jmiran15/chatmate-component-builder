// app shell with the header
import React from "react";
import { Header, Group, Button, createStyles, Center } from "@mantine/core";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { UserButton, useAuth } from "@clerk/clerk-react";

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: theme.black,
    ...theme.fn.hover({
      color: theme.colors.blue[9],
    }),
  },

  active: {
    textDecoration: "none",
    color: theme.colors.blue[9],
  },
}));

export default function Shell() {
  const { isSignedIn } = useAuth();
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <Header py="md" height={70}>
        <Group w="100%" align="center" position="apart" px="xl">
          <Group>
            <Button
              size="md"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              onClick={() => navigate("/")}
              mr="xl"
            >
              Chatmate
            </Button>

            {isSignedIn && (
              <NavLink
                to="/projects"
                className={({ isActive, isPending }) =>
                  isActive ? classes.active : classes.link
                }
              >
                Projects
              </NavLink>
            )}

            <NavLink
              to="/discover"
              className={({ isActive, isPending }) =>
                isActive ? classes.active : classes.link
              }
            >
              Discover
            </NavLink>

            {/* <NavLink
              to="/examples"
              className={({ isActive, isPending }) =>
                isActive ? classes.active : classes.link
              }
            >
              Examples
            </NavLink> */}
          </Group>

          <Group>
            {!isSignedIn && (
              <NavLink
                to="/sign-up"
                className={({ isActive, isPending }) =>
                  isActive ? classes.active : classes.link
                }
              >
                Sign up
              </NavLink>
            )}

            {!isSignedIn && (
              <NavLink
                to="/sign-in"
                className={({ isActive, isPending }) =>
                  isActive ? classes.active : classes.link
                }
              >
                Sign in
              </NavLink>
            )}
            {isSignedIn && <UserButton afterSignOutUrl="/" />}
          </Group>
        </Group>
      </Header>
      <Center>
        <Outlet />
      </Center>
    </>
  );
}
