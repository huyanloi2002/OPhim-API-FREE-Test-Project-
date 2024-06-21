import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";

const Title = ({
  icon,
  text,
  className = "",
  titleMoreSize = "text-sm",
  titleMoreIconSize = "text-lg",
  titleMore = false,
  isMore = false,
}) => {
  return (
    <React.Fragment>
      <div className={`w-full flex items-center justify-between gap-1`}>
        <span className={`inline-flex items-center gap-1 ${className}`}>
          <p>{icon}</p>
          <p>{text}</p>
        </span>
        {isMore && (
          <span className="cursor-pointer inline-flex items-center">
            <MdOutlineExpandMore className={titleMoreIconSize} />
            {titleMore && <p className={titleMoreSize}>Xem thêm</p>}
          </span>
        )}
      </div>
    </React.Fragment>
  );
};

export default Title;
