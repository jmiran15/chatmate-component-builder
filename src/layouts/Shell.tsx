// app shell with the header
import React from "react";
import { Header, Group } from "@mantine/core";
import { Outlet, NavLink } from "react-router-dom";
import { UserButton, useAuth } from "@clerk/clerk-react";

export default function Shell() {
  const { isSignedIn } = useAuth();

  return (
    <>
      <Header height={60} p="md">
        <Group w="100%" align="center" position="apart">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Chatmate
          </NavLink>
          {isSignedIn && (
            <NavLink
              to="/projects"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Projects
            </NavLink>
          )}

          <NavLink
            to="/examples"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Examples
          </NavLink>
          <NavLink
            to="/discover"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Discover
          </NavLink>

          {!isSignedIn && (
            <NavLink
              to="/sign-up"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Sign up
            </NavLink>
          )}

          {!isSignedIn && (
            <NavLink
              to="/sign-in"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Sign in
            </NavLink>
          )}
          {isSignedIn && <UserButton afterSignOutUrl="/" />}
        </Group>
      </Header>

      <Outlet />
    </>
  );
}
