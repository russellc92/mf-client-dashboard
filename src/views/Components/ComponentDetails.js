import React from "react";
// @material-ui/core components
import { makeStyles, TextField, Button } from "@material-ui/core";
import ReactJson from "react-json-view";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  cardTitleBlack: {
    color: "#000000",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  requestTitleBlack: {
    textAlign: "left",
    color: "#000000",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  textArea: {
    width: "100%"
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  let payload = {
    updated_src: "src", //new src value
    name: "name", //new var name
    namespace: "namespace", //list, namespace indicating var location
    new_value: "new_value", //new variable value
    existing_value: "existing_value" //existing variable value
  };
  let returnPayload = {
    updated_src: "src", //new src value
    name: "name", //new var name
    namespace: "namespace", //list, namespace indicating var location
    new_value: "new_value", //new variable value
    existing_value: "existing_value" //existing variable value
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Components List</h4>
            <p className={classes.cardCategoryWhite}>
              The list of components provided by milkFloat that you can try for
              yourself.
            </p>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Card profile>
                  <CardHeader>
                    <h4 className={classes.requestTitleBlack}>POST</h4>
                    <p className={classes.requestTitleBlack}>/extract</p>
                  </CardHeader>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <Card>
                  <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>
                      Payload And Return
                    </h4>
                    <p className={classes.cardCategoryWhite}>Try Me Out</p>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <h4 className={classes.cardTitleBlack}>Payload</h4>
                        <ReactJson
                          src={payload}
                          name="Payload"
                          theme="solarized"
                          iconStyle="triangle"
                          collapseStringsAfterLength={15}
                          onEdit={e => {
                             payload = e.updated_src;
                          }}
                          onDelete={e => {
                            payload = e.updated_src;
                          }}
                          onAdd={e => {
                            payload = e.updated_src;
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        <h4 className={classes.cardTitleBlack}>Return</h4>
                        <ReactJson
                          src={returnPayload}
                          name="Return"
                          theme="solarized"
                          iconStyle="triangle"
                          collapseStringsAfterLength={15}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}></GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <Button color="primary">Submit</Button>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
