import { connect } from "react-redux";
const Plan = () => {
    let h1 = ["Discus time", "Take information", "Makeing website", "Testing"];
    let h2 = ["Every great endeavor begins with a discussion of everything related to the endeavor. At this stage, the theme of the site, the design concept, the colors, the blocks of the site are discussed.",
        "I will need some information and content. The site needs content and pictures, at this stage I should get at least 90% of the necessary information.",
        "That moment when the whole idea comes to life. At this stage you can check the work at any time, in the range discussed in stage 1", "A day is allotted for this stage, this stage of verification of my work by you."]
    let final = []
    for (let i = 0; i < 4; i++) {
        final.push(
            <div className={"plan-b" + ((i + 1) % 2 == 0 ? " right1" : " left1 lolic") + (i == 0 ? " firstl1" : " ")}>
                <div className="plan-t">{i+1 + ". " + h1[i]}</div>
                <div className="plan-l">{h2[i]}</div>
            </div>
        )
    }
    return (
        <div className="Plan" id="Plan">
            <div className="plan-f lolic-2">What's the plan?</div>
            {final}
        </div>
    )
}
const mapStateToProps = store => {
    return {
      store: store
    };
  };
  
  export default connect(mapStateToProps)(Plan);