import React from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">О разработчике</Link>
                    </li>
                    <li>
                        <Link to="/posts">Посты</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}