import {FC} from "react";

export interface FooterProps {
  image: string;
}

const FooterBox: FC<FooterProps> = ({image}) => {
  return (
    <>
      <div className="w-full p-4" data-testid="footer-box">
        <img src={image} alt="" />
      </div>
    </>
  );
};

export default FooterBox;
