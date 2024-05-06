import { ReactComponent as WorkIcon } from '../images/work.svg';
import { ReactComponent as SchoolIcon } from '../images/school.svg';
import { ReactComponent as ClubIcon} from '../images/club.svg';
import {Container, Row, Col} from 'react-bootstrap'
import timeline_elements from './timeline_elements';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Timeline = () => {
    let workIconStyles = {background: '#06D6A0'};
    let schoolIconStyles = {background: '#f9c74f'};
    let clubIconStyles = {background: 'pink'};
    const screenWidth = window.screen.width;
    let showAnimation = screenWidth < 786 ? false : true;
    return (
        <section className="timeline"  id="projects"> 
        <Container fluid><Row className="align-items-center"><Col>
            <h1>Projects And Experience</h1>
            <VerticalTimeline className="custom-line" animate={showAnimation}>
                {
                    timeline_elements.map((element) => {
                        let isWorkIcon = element.icon === 'work';
                        let isSchoolIcon = element.icon === 'school';
                        const iconStyles = isWorkIcon ? workIconStyles : (isSchoolIcon ? schoolIconStyles : clubIconStyles);
                        const myicon = isWorkIcon ? <WorkIcon/> : (isSchoolIcon ? <SchoolIcon/> : <ClubIcon/>);
                        let showButton = element.buttonText !== undefined && element.buttonText !== null & element.buttonText !== "";
                        let displayButton = isWorkIcon ? "workButton" : (isSchoolIcon ? "schoolButton" : "clubButton");
                        let showLocation = element.location !== undefined && element.location !== null & element.location !== "";
                        return (
                            <VerticalTimelineElement key={element.key} date={element.date} dateClassName="date" iconStyle={iconStyles} icon={myicon}>
                                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                                {showLocation && (<h5 className="vertical-timeline-element-subtitle">{element.location}</h5>)}
                                <p id="description">{element.description}</p>
                                {showButton && (<a className={`button ${displayButton}`} href={element.link} target="_blank">{element.buttonText}</a>)}
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline></Col></Row></Container>
        </section>
    )
}