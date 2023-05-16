import {memo} from "react";

const styles = {
    fill: "none",
    stroke: "#858c96",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
};

export const ArrowRightIcon = memo((props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12.808" height="10.116" viewBox="0 0 12.808 10.116">
            <path 
                data-name="Arrow - Right" 
                d="M6.5 12h11m0 0-4.588-4m4.588 4-4.588 4" 
                transform="translate(-5.75 -6.942)" 
                {...styles}
            />
        </svg>
    );
});