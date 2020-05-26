import React from 'react';

export default function RoverText({ roverName }) {
  if (roverName === 'Curiosity') {
    return (
      <p>
        Curiosity is a car-sized rover designed to explore the crater Gale on Mars as part of
        NASA&apos;s Mars Science Laboratory mission (MSL). Curiosity was launched from Cape
        Canaveral on November 26, 2011, at 15:02 UTC and landed on Aeolis Palus inside Gale on Mars
        on August 6, 2012, 05:17 UTC. The Bradbury Landing site was less than 2.4 km (1.5 mi) from
        the center of the rover&apos;s touchdown target after a 560 million km (350 million mi)
        journey. The rover&apos;s goals include an investigation of the Martian climate and geology;
        assessment of whether the selected field site inside Gale has ever offered environmental
        conditions favorable for microbial life, including investigation of the role of water; and
        planetary habitability studies in preparation for human exploration. In December 2012,
        Curiosity&apos;s two-year mission was extended indefinitely, and on August 5, 2017, NASA
        celebrated the fifth anniversary of the Curiosity rover landing. The rover is still
        operational, and as of May 25, 2020, Curiosity has been on Mars for 2774 sols (2849 total
        days) since landing on August 6, 2012.
      </p>
    );
  }
  if (roverName === 'Opportunity') {
    return (
      <p>
        Opportunity, also known as MER-B (Mars Exploration Rover – B) or MER-1, and nicknamed
        &quot;Oppy&quot;, is a robotic rover that was active on Mars from 2004 until the middle of
        2018. Launched on July 7, 2003, as part of NASA&apos;s Mars Exploration Rover program, it
        landed in Meridiani Planum on January 25, 2004, three weeks after its twin Spirit (MER-A)
        touched down on the other side of the planet. With a planned 90-sol duration of activity
        (slightly more than 90 Earth days), Spirit functioned until it got stuck in 2009 and ceased
        communications in 2010, while Opportunity was able to stay operational for 5111 sols after
        landing, maintaining its power and key systems through continual recharging of its batteries
        using solar power, and hibernating during events such as dust storms to save power. This
        careful operation allowed Opportunity to exceed its operating plan by 14 years, 46 days (in
        Earth time), 55 times its designed lifespan. By June 10, 2018, when it last contacted NASA,
        the rover had traveled a distance of 45.16 kilometers (28.06 miles). Mission highlights
        included the initial 90-sol mission, finding extramartian meteorites such as Heat Shield
        Rock (Meridiani Planum meteorite), and over two years of exploring and studying Victoria
        crater. The rover survived moderate dust storms and in 2011 reached Endeavour crater, which
        has been described as a &quot;second landing site&quot;. The Opportunity mission is
        considered one of NASA&apos;s most successful ventures. Due to the planetary 2018 dust storm
        on Mars, Opportunity ceased communications on June 10 and entered hibernation on June 12,
        2018. It was hoped it would reboot once the weather cleared, but it did not, suggesting
        either a catastrophic failure or that a layer of dust had covered its solar panels. NASA
        hoped to re-establish contact with the rover, citing a windy period that could potentially
        clean off its solar panels. On February 13, 2019, NASA officials declared that the
        Opportunity mission was complete, after the spacecraft had failed to respond to over 1,000
        signals sent since August 2018.
      </p>
    );
  }

  return (
    <p>
      Spirit, also known as MER-A (Mars Exploration Rover – A) or MER-2, is a robotic rover on Mars,
      active from 2004 to 2010. It was one of two rovers of NASA&apos;s Mars Exploration Rover
      Mission. It landed successfully within the impact crater Gusev on Mars at 04:35 Ground UTC on
      January 4, 2004, three weeks before its twin, Opportunity (MER-B), which landed on the other
      side of the planet. Its name was chosen through a NASA-sponsored student essay competition.
      The rover became stuck in a &quot;sand trap&quot; in late 2009 at an angle that hampered
      recharging of its batteries; its last communication with Earth was sent on March 22, 2010. The
      rover completed its planned 90-sol mission. Aided by cleaning events that resulted in more
      energy from its solar panels, Spirit went on to function effectively over twenty times longer
      than NASA planners expected. Spirit also logged 7.73 km (4.8 mi) of driving instead of the
      planned 600 m (0.4 mi), allowing more extensive geological analysis of Martian rocks and
      planetary surface features. Initial scientific results from the first phase of the mission
      (the 90-sol prime mission) were published in a special issue of the journal Science. On May 1,
      2009 (5 years, 3 months, 27 Earth days after landing; 21.6 times the planned mission
      duration), Spirit became stuck in soft sand. This was not the first of the mission&apos;s
      &quot;embedding events&quot; and for the following eight months NASA carefully analyzed the
      situation, running Earth-based theoretical and practical simulations, and finally programming
      the rover to make extrication drives in an attempt to free itself. These efforts continued
      until January 26, 2010 when NASA officials announced that the rover was likely irrecoverably
      obstructed by its location in soft sand,[9] though it continued to perform scientific research
      from its current location.[10] The rover continued in a stationary science platform role until
      communication with Spirit stopped on March 22, 2010 (sol 2208). JPL continued to attempt to
      regain contact until May 24, 2011, when NASA announced that efforts to communicate with the
      unresponsive rover had ended, calling the mission complete. A formal farewell took place at
      NASA headquarters shortly thereafter. The Jet Propulsion Laboratory (JPL), a division of the
      California Institute of Technology in Pasadena, manages the Mars Exploration Rover project for
      NASA&apos;s Office of Space Science, Washington.
    </p>
  );
}
