import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import IStaticBackgroundView from "./IStaticBackgroundView";
export interface IBackgroundSrc {
  backgroundSrc: string;
}

const useStyles = makeStyles<Theme, IBackgroundSrc>(() => {
  return {
    background: {
      width: "100vw",
      backgroundImage: ({ backgroundSrc }) => `url("${backgroundSrc}")`,
      backgroundPosition: "right",
      backgroundSize: "cover",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: -1,
    },
  };
});

const StaticBackgroundView = ({ src, ...rest }: IStaticBackgroundView) => {
  const backgroundSrcProps = { backgroundSrc: src } as IBackgroundSrc;
  const { background } = useStyles(backgroundSrcProps);
  return <div className={background} {...rest} />;
};

export default StaticBackgroundView;
