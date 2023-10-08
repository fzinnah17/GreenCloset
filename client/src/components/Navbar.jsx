import React, { useReducer } from "react";
import PropTypes from "prop-types";
import SearchBar from "../components/SearchBar";
import "../css/Navbar.css";

const Title = ({ stateProp, click, className, text = "MENU", rectangleClassName }) => {
    const [state, dispatch] = useReducer(reducer, {
        state: stateProp || "default",
        click: click || "menu-default",
    });

    return (
        <div
            className={`TITLE ${className}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <div className={`MENU ${state.state} ${state.click}`}>{text}</div>
            <div className={`rectangle click-${state.click} state-${state.state} ${rectangleClassName}`} />
        </div>
    );
};

Title.propTypes = {
    stateProp: PropTypes.oneOf(["HOVER", "default"]),
    click: PropTypes.oneOf(["menu-default", "UNDERLINED"]),
    text: PropTypes.string,
};

function reducer(state, action) {
    switch (action) {
        case "mouse_enter":
            return {
                ...state,
                click: "UNDERLINED",
                state: "HOVER",
            };
        case "mouse_leave":
            return {
                ...state,
                click: "menu-default",
                state: "default",
            };
        default:
            return state;
    }
}

export const Navbar = () => {
    const LogoWTitle = ({ className }) => (
        <div className={`logoWithTitle ${className}`}>
            <div className="logoFrame">
            <img src="/MainLogo.svg" alt="Main Logo" className="mainLogo" />
                <div className="logoText">Green Closet</div>
            </div>
        </div>
    );

    const MenuIconsScreen = () => (
        <div className="menuIconsScreen">
            <div className="menuIconInstance"></div>
        </div>
    );

    return (
        <div className="navbarFrame">
            <div className="navbarContent">
                <div className="menuSection">
                    <div className="menuItems">
                        <Title className="menuItem highlighted" text="ABOUT" />
                    </div>
                </div>
                <div className="logoSection">
                    <LogoWTitle />
                </div>
                <div className="iconSection">
                    <SearchBar />
                    <MenuIconsScreen />
                </div>
            </div>
        </div>
    );
};


