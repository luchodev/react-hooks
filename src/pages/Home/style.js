import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default makeStyles({
  container: {
    height: "100vh",
    flexDirection: "column",
    ...centeredStyleObj,
  },
  cardContainer: {
    ...centeredStyleObj,
    width: 400,
    height: 200,
    padding: "2rem",
    flexDirection: "column",
  },
  title: {
    fontSize: "4rem",
  },
  tittleGridContainer: {
    ...centeredStyleObj,
  },
  textFieldSearch: {
    width: "90%",
  },
  searchButton: {
    marginLeft: ".5rem",
  },
  buttonsContainer: {
    marginTop: ".5rem",
  },
  movieIcon: {
    fontSize: "4rem",
  },
});
