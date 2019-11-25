import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Redirect } from "react-router-dom";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

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
  }
};

const useStyles = makeStyles(styles);

export default function TableList(props) {
  const classes = useStyles();
  const {history} = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Components List
            </h4>
            <p className={classes.cardCategoryWhite}>
              The list of components provided by milkFloat that you can try for yourself.
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Description" , "Last Updated", "Price"]}
              tableData={[
                ["1", "Face Matcher", "Face Matcher makes it easy to add image and video analysis to your applications. You just provide an image or video to the Rekognition API, and the service can detect, analyze, and compare faces for a wide variety of user verification, people counting, and public safety use cases.", "13/11/19", "£10,738"],
                ["2", "OCR ID Cards", "Our OCR ID Card module enables you to quickly identify details from ID cards including name and numbers", "02/02/19", "Trial"],
                ["3", "OCR Passports and Driving Licenses", "Our machine-readable zone (MRZ) recognition module enables you to quickly integrate passport-, ID document scanning, and data extraction features into your apps. Read data from identity documents of more than 150 countries to verify the identity or age of your customers instantly.", "21/04/19", "£26,142"],
              ]}
              handleClick={()=>history.push('/admin/componentsDetails')}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
