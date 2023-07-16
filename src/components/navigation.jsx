import {
  createStyles,
  Navbar,
  Code,
  UnstyledButton,
  Text,
  Group,
  Menu,
  ActionIcon,
  Tooltip,
  rem,
} from "@mantine/core";
import { IconMessageChatbot, IconBug, IconPlus } from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
import Chat from "../pages/chat";

const useStyles = createStyles((theme) => ({
  navbar: {
    paddingTop: 0,
  },

  section: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    marginBottom: theme.spacing.md,

    "&:not(:last-of-type)": {
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },
  },

  mainLinks: {
    paddingLeft: `calc(${theme.spacing.md} - ${theme.spacing.xs})`,
    paddingRight: `calc(${theme.spacing.md} - ${theme.spacing.xs})`,
    paddingBottom: theme.spacing.md,
  },

  mainLink: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontSize: theme.fontSizes.xs,
    padding: `${rem(8)} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  mainLinkInner: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },

  mainLinkIcon: {
    marginRight: theme.spacing.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
  },

  mainLinkBadge: {
    padding: 0,
    width: rem(20),
    height: rem(20),
    pointerEvents: "none",
  },

  collections: {
    paddingLeft: `calc(${theme.spacing.md} - ${rem(6)})`,
    paddingRight: `calc(${theme.spacing.md} - ${rem(6)})`,
    paddingBottom: theme.spacing.md,
  },

  collectionsHeader: {
    paddingLeft: `calc(${theme.spacing.md} + ${rem(2)})`,
    paddingRight: theme.spacing.md,
    marginBottom: rem(5),
  },

  collectionLink: {
    display: "block",
    padding: `${rem(8)} ${theme.spacing.xs}`,
    textDecoration: "none",
    borderRadius: theme.radius.sm,
    fontSize: theme.fontSizes.xs,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    lineHeight: 1,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },
  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export default function Navigation({
  onClickComponent,
  state,
  createNode,
  setSelectedPage,
  setOnChatPage,
}) {
  const { classes } = useStyles();

  const componentLinks = Object.keys(state.nodes).map((key) => {
    return (
      <a
        onClick={(event) => {
          event.preventDefault();
          onClickComponent(state.nodes[key].id);
        }}
        key={key}
        className={classes.collectionLink}
      >
        {state.nodes[key].name}
      </a>
    );
  });

  return (
    <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group sx={{ fontWeight: 700 }} position="apart">
          <Text size="xl" w={rem(120)}>
            Chatmate
          </Text>
          <Code sx={{ fontWeight: 700 }}>v1.0.0</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section className={classes.section}>
        <div className={classes.mainLinks}>
          <UnstyledButton
            className={classes.mainLink}
            onClick={() => {
              console.log("clicked");
              setSelectedPage(undefined);
              setOnChatPage(true);
            }}
          >
            <div className={classes.mainLinkInner}>
              <IconMessageChatbot
                size={20}
                className={classes.mainLinkIcon}
                stroke={1.5}
              />
              <span>Chat</span>
            </div>
          </UnstyledButton>
          <UnstyledButton className={classes.mainLink}>
            <div className={classes.mainLinkInner}>
              <IconBug
                size={20}
                className={classes.mainLinkIcon}
                stroke={1.5}
              />
              <span>Logs</span>
            </div>
          </UnstyledButton>
        </div>
      </Navbar.Section>

      <Navbar.Section className={classes.section}>
        <Group className={classes.collectionsHeader} position="apart">
          <Text size="xs" weight={500} color="dimmed">
            Collections
          </Text>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Tooltip label="Create collection" withArrow position="right">
                <ActionIcon variant="default" size={18}>
                  <IconPlus size="0.8rem" stroke={1.5} />
                </ActionIcon>
              </Tooltip>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Chain components</Menu.Label>
              <Menu.Item
                onClick={() => {
                  createNode({
                    type: "chat",
                    name: "New chat component",
                    chatModel: "gpt-4",
                    temperature: 0.7,
                    maxTokens: 256,
                    systemMessage: "You are a helpful assistant.",
                    userMessage: `<span contenteditable="false" class="e-mention-chip">user_input</span>`,
                  });
                }}
              >
                Chat
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  const tableId = uuidv4();
                  createNode({
                    type: "document",
                    name: "New document retrieval component",
                    numberOfDocuments: 1,
                    similarityThreshold: 0.7,
                    searchQuery: `<span contenteditable="false" class="e-mention-chip">user_input</span>`,
                    tableId,
                  });
                }}
              >
                Document retrieval
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
        <div className={classes.collections}>{componentLinks}</div>
      </Navbar.Section>
    </Navbar>
  );
}
