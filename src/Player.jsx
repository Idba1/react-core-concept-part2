import { useState } from "react"

export default function Player() {
    const [team, setTeam] = useState(11);

    const clickForAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }

    const clickForRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam)
    }

    return (
        <div style={{ border: '2px solid lightblue', marginBottom: '25px', padding: '10px', gap: '5px', borderRadius: "15px" }}>
            <h1>Player: {team}</h1>
            <button onClick={clickForAdd}>Add</button>
            <button onClick={clickForRemove}>Remove</button>
        </div>
    )
}