import MilitaryProgressBar from "./atoms/MilitaryProgressBar";

const MilitaryProgress = () => {
    const startDate = new Date(2025, 1, 25);
    const now = new Date();

    const yearsDiff = now.getFullYear() - startDate.getFullYear();
    const monthsDiff = now.getMonth() - startDate.getMonth();
    
    const totalMonths = yearsDiff * 12 + monthsDiff;

    const adjustment = now.getDate() < startDate.getDate() ? -1 : 0;
    
    const completedMonths = totalMonths + adjustment;
    
    return (<>
       <div className="military-progress-head">I've successfully completed {completedMonths} months of my military service</div>
        <MilitaryProgressBar months={completedMonths}/>
    </>)
}

export default MilitaryProgress