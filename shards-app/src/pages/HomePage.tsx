import { createStyles, Theme, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import Browse from "../components/Browse";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  })
);

const HomePage = () => {
    const classes = useStyles();

    useEffect(() => {
        document.title = "FractlDao";
    })

    return(<div>
            <div>Fractionalized NFTs</div>
            <Browse/>
        </div>
    )
}

export default HomePage;