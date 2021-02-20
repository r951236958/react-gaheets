import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
//import { makeStyles } from "@material-ui/core/styles";
//import AppBar from "@material-ui/core/AppBar";
//import Tabs from "@material-ui/core/Tabs";
//import Tab from "@material-ui/core/Tab";
//import Grid from "@material-ui/core/Grid";
//import netlifyAuth from "../netlifyAuth.js";
//import styles from "../style.css";

export default function MyHero() {
  //const classes = useStyles()
  return (
    <div className="grid">
      <div className="card">
        <Link component="button" href="/about" color="inherit">
          <Typography variant="h3">About &rarr;</Typography>
          <p>
            In Next.js, a <strong>page</strong> is a{" "}
            <code>`React Component`</code> exported from a <code>`.js`</code>,{" "}
            <code>`.jsx`</code>, <code>`.ts`</code>, or <code>`.tsx`</code> file
            in the <code>`pages`</code> directory.
          </p>
        </Link>
      </div>
      <div className="card">
        <Link component="button" href="/home" color="inherit">
          <Typography variant="h3" color="inherit">
            Home &rarr;
          </Typography>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </Link>
      </div>
      <div className="card">
        <Link
          component="button"
          href="https://github.com/vercel/next.js/tree/master/examples"
          color="inherit"
        >
          <Typography variant="h3">Examples &rarr;</Typography>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </Link>
      </div>
      <div className="card">
        <Link
          component="button"
          href="https://nextjs.org/docs/advanced-features/custom-app"
          color="inherit"
        >
          <Typography variant="h3">
            Custom <code>`App`</code> &rarr;
          </Typography>
          <p>
            Next.js uses the <code>`App`</code> component to initialize pages.{" "}
          </p>
        </Link>
      </div>
    </div>
  );
}
