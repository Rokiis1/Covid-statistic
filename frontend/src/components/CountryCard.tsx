import { generatePath } from "react-router-dom";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import NavLink from "./NavLink";
import { RouteKey } from "../routes/RouteKey";
import { Country } from "../interfaces/Country";

const CountryCard = ({
  country,
  cases,
  deaths,
  recovered,
  countryInfo,
}: Country) => (
  <Card>
    <NavLink
      to={generatePath(RouteKey.Country, {
        id: countryInfo._id?.toString(),
      })}
      underline="none"
      color="inherit"
    >
      <CardHeader avatar={<Avatar src={countryInfo.flag} />} title={country} />
    </NavLink>
    <CardContent>
      <List dense>
        <ListItem>
          <ListItemText primary={`Cases: ${cases}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Deaths: ${deaths}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Recovered: ${recovered}`} />
        </ListItem>
      </List>
    </CardContent>
  </Card>
);

export default CountryCard;
