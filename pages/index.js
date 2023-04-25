import { MongoClient } from "mongodb";
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from "react";
import Head from "next/head";

// const DUMMY_LIST = [
//     {
//         id: 'm1',
//         image: 'https://media.istockphoto.com/id/183276247/photo/parliament-hill-ottawa-canada.jpg?s=1024x1024&w=is&k=20&c=dv-APnwXuPsVVv-Tt7hEMXqTel2AhVl82KN5KAx5bHs=',
//         title: 'First meetup',
//         address: 'Ottawa',
//         description: 'PH'
//     },
//     {
//         id: 'm2',
//         image: 'https://media.istockphoto.com/id/183276247/photo/parliament-hill-ottawa-canada.jpg?s=1024x1024&w=is&k=20&c=dv-APnwXuPsVVv-Tt7hEMXqTel2AhVl82KN5KAx5bHs=',
//         title: 'Second meetup',
//         address: 'Ottawa',
//         description: 'PH'
//     }
// ]

function HomePage(props){
    return <Fragment>
        <Head>
            <title>NextJS Meetups</title>
            <meta name="description" content="Next JS Project using mongodb"/>        
        </Head>
        <MeetupList meetups={props.meetups} />
    </Fragment> 
}

// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;

//     //fetch data from APIs
//     return {
//         props: {
//             meetups: DUMMY_LIST
//         }
//     }
// }

export async function getStaticProps(){
    const client = await MongoClient.connect('mongodb+srv://psabhiram:abhi03ram@cluster0.wzxe8.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups =  await meetupsCollection.find().toArray();
    client.close();
    //fetch data from APIs
    return {
        props:{
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        }
    };
}
export default HomePage;
