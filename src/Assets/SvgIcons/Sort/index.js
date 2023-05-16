import {memo} from "react";

const styles = {
    fill: "none",
    stroke: "#999",
    strokeLinecap: "round",
    strokeWidth: 1.5
};

export const SortIcon = memo((props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="13.5" height="11.5" viewBox="0 0 13.5 11.5" {...props}>
            <g id="Sort" transform="translate(-5.25 -6.25)">
                <path id="Path_425" data-name="Path 425" {...styles}  d="M16 12H8"/>
                <path id="Path_426" data-name="Path 426" {...styles}  d="M18 7H6"/>
                <path id="Path_427" data-name="Path 427" {...styles}  d="M10 17h4"/>
            </g>
        </svg>
    );
});