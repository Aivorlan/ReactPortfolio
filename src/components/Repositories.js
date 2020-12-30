import React from "react";
import "../styles/Repositories.css"

function RepoLinks(props) {
    return (
    <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 card-body aboutme">
                        <h5 class="card-title text-info border-bottom border-white">
                        Github Repository Links:
                        </h5>
                        <p class="card-text text-white">
                       <ul><a href="https://github.com/Aivorlan/NoteTakerApp">NoteTakerApp</a></ul>
                       <ul><a href="https://github.com/Aivorlan/DirectoryApp">DirectoryApp</a></ul>
                       <ul><a href="https://github.com/smrodriguez88/WatchIt">WatchItApp</a></ul>
                       <ul><a href="https://github.com/Aivorlan/WeatherDashboardApp">WeatherDashboardApp</a></ul> 
                       <ul><a href="https://github.com/Aivorlan/PlannerApp">PlannerApp</a></ul> 
                       <ul><a href="https://github.com/Aivorlan/Build-A-TeamApp">BuildATeamApp</a></ul>

                        

                        



                        </p>
                                
                             
                      
                        
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RepoLinks;