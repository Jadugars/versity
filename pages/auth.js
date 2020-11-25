

export async function getServerSideProps(context) {
    //console.log(context);
    let mode = context.query.mode;
    
    return {
      
      props: {mode}, // will be passed to the page component as props
    }
  }

function Auth(props){
    let mode = props.mode;
    console.log(mode);
    return <p>Utaad AAgya</p>
}

export default Auth;