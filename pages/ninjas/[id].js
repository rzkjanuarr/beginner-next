export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>Details Page</h1>
      <p>Name : {ninja.name}</p>
      <p>Email : {ninja.email}</p>
      <p>Website: {ninja.website}</p>
      <p>Address: {ninja.address.city}</p>
    </div>
  );
};

export default Details;
