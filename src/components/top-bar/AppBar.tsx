import MenuIcon from "@mui/icons-material/Menu";
import {Container, Grid2 as Grid} from "@mui/material";
import MAppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, {FC} from "react";
import classes from "./AppBar.module.css";

export interface AppBarProps {
  items: Array<{
    title: string;
    type: "link" | "button";
  }>;
}

export interface AppBarPropsWithClickEvent extends AppBarProps {
  onClickOfItem: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AppDrawer: FC<
  AppBarPropsWithClickEvent & {
    handleDrawerToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }
> = ({handleDrawerToggle, items}) => {
  return (
    <>
      <div className="flex justify-end p-3 h-20">
        <button onClick={handleDrawerToggle}>
          <img
            src="/assets/images/close_button.png"
            alt="close button"
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </button>
      </div>
      <div className="text-left mt-10 ml-16 w-36">
        {items.map((item, idx) => {
          if (item.type === "link") {
            return (
              <div
                key={`${item.title}-${idx}`}
                style={{
                  marginBottom: "45px",
                }}
                className="font-normal text-xl">
                <a href="#">{item.title}</a>
              </div>
            );
          } else if (item.type === "button") {
            return (
              <div
                key={`${item.title}-${idx}`}
                style={{
                  marginBottom: "45px",
                }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#008080",
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: 700,
                    borderRadius: "8px",
                  }}>
                  {item.title}
                </Button>
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

const AppDrawerWithBurgerIcon: FC<
  AppBarPropsWithClickEvent & {
    mobileOpen: boolean;
    handleDrawerToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }
> = ({handleDrawerToggle, items, mobileOpen, onClickOfItem}) => {
  return (
    <>
      <MAppBar
        component="nav"
        sx={{
          backgroundColor: "#FFFFFF",
          height: "80px",
          position: "relative",
          boxShadow: "none",
        }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "80px",
          }}>
          <Typography variant="h6" component="div">
            <img
              src="/assets/images/bar_image.png"
              style={{
                width: "94px",
              }}
            />
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              ml: "auto",
              color: "#001A1A",
              width: "40px",
              height: "40px",
            }}>
            <MenuIcon
              sx={{
                width: "40px",
                height: "40px",
              }}
            />
          </IconButton>
        </Toolbar>
      </MAppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          anchor="right"
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "90%",
            },
          }}>
          <AppDrawer
            handleDrawerToggle={handleDrawerToggle}
            items={items}
            onClickOfItem={onClickOfItem}
          />
        </Drawer>
      </nav>
    </>
  );
};

const AppDrawerWithBlock: FC<AppBarPropsWithClickEvent> = ({items}) => {
  return (
    <>
      <MAppBar
        position="static"
        sx={{
          backgroundColor: "#FFF",
          borderRadius: "12px",
          margin: "24px 0px",
        }}>
        <Grid container>
          <Grid size={{xs: 12}}>
            <Toolbar
              disableGutters
              sx={{
                display: "block",
              }}>
              <div className={classes.menuBlockContainer}>
                <Grid container>
                  <Grid
                    size={{
                      xs: 6,
                    }}>
                    <div className={classes.menuLeftBlock}>
                      <img
                        src="/assets/images/bar_image.png"
                        style={{
                          width: "94px",
                        }}
                      />

                      <div className={classes.menuLeftBlockGroup}>
                        {items.map((item, idx) => {
                          if (item.type === "link") {
                            return (
                              <div
                                className="font-normal text-base mx-4"
                                style={{
                                  color: "#001A1A",
                                }}
                                key={`${item.title}-${idx}`}>
                                <a href="#">{item.title}</a>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    size={{
                      xs: 6,
                    }}>
                    <div className={classes.menuRightBlock}>
                      {items.map((item, idx) => {
                        if (item.type === "button") {
                          return (
                            <div key={`${item.title}-${idx}`}>
                              <Button
                                variant="contained"
                                sx={{
                                  backgroundColor: "#008080",
                                  color: "#ffffff",
                                  fontSize: "16px",
                                  fontWeight: 700,
                                  borderRadius: "8px",
                                }}>
                                {item.title}
                              </Button>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Toolbar>
          </Grid>
        </Grid>
      </MAppBar>
    </>
  );
};

export const AppBarForMobile: FC<AppBarPropsWithClickEvent> = ({
  items,
  onClickOfItem,
}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  return (
    <Container>
      <CssBaseline />
      <AppDrawerWithBurgerIcon
        handleDrawerToggle={handleDrawerToggle}
        items={items}
        mobileOpen={mobileOpen}
        onClickOfItem={onClickOfItem}
      />
    </Container>
  );
};

export const AppBarForDesktop: FC<AppBarPropsWithClickEvent> = ({
  items,
  onClickOfItem,
}) => {
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <AppDrawerWithBlock items={items} onClickOfItem={onClickOfItem} />
    </Container>
  );
};

export default AppBarForMobile;
