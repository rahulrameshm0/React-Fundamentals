import { useState } from "react"

export const UserDashboard = ({isPremium}) => {
    const [credits, setCredits] = useState(100);

    if (!isPremium) {
        return <div>Upgrade to a premium to see credits</div>
    }

    return <div>
        <p>You have {credits} credit</p>
        <button onClick={() => setCredits(0)}>Spend all credits
            
        </button>
    </div>
}