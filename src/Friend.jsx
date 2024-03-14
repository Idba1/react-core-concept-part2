export default function Friend({friend}){
    const {title , body} = friend;
    // console.log(title)
    // console.log(friend)
    return(
        <div className="box">
            <h4>title:{title}</h4>
            <p>body:{body}</p>
        </div>
    )
}