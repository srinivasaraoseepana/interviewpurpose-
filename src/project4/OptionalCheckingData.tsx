

type Props = {};

const OptionalCheckingData = (props: Props) => {


  const userMahesh = {
    id: 4,
    // name missing
    age: 29,
    skills: [],
    address: {
      // city missing
      pin: 600001,
    },
  };

  console.log({ userMahesh.age });



  return <> </>;
};

export default OptionalCheckingData;
