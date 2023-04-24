import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return <MeetupDetail
        image='https://media.istockphoto.com/id/183276247/photo/parliament-hill-ottawa-canada.jpg?s=1024x1024&w=is&k=20&c=dv-APnwXuPsVVv-Tt7hEMXqTel2AhVl82KN5KAx5bHs='
        title='temp'
        address='temp'
        description='temp'></MeetupDetail>
}

export async function getStaticPaths() {
    return {
      fallback: false,
      paths: [
        {
          params: {
            meetupId: 'm1',
          },
        },
        {
          params: {
            meetupId: 'm2',
          },
        },
      ],
    };
  }

export async function getStaticProps(context) {
    const meetupdId = context.params.meetupId;
    console.log(meetupdId);
    //fetch data from APIs for a single meetup
    return {
        props: {
            meetupData: {
                image:
                    'https://media.istockphoto.com/id/183276247/photo/parliament-hill-ottawa-canada.jpg?s=1024x1024&w=is&k=20&c=dv-APnwXuPsVVv-Tt7hEMXqTel2AhVl82KN5KAx5bHs=',
                id: 'm1',
                title: 'temp',
                address: 'temp',
                description: 'temp',
            },
        },
    };
}

export default MeetupDetails