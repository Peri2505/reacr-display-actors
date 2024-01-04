import {
  Card,
  CardBody,
  CardText,
  CardSubtitle,
  CardTitle,
  Button,
} from "reactstrap";

function Actor({ name, profile_path, known_for, popularity }) {
  const Base_Url = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={`${Base_Url}${profile_path}`} />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Rating: {popularity}
          </CardSubtitle>
          <CardText>
            Movies Started in:
            {known_for.map((movie) => (
              <p>
                {movie.original_title || movie.original_name} released in{" "}
                {movie.release_date || movie.first_air_date}
              </p>
            ))}
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Actor;
