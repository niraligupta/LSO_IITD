import { Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const schedule = [
  {
    day: 'Mon',
    date: 'June 16',
    sessions: [
      { time: '9:15-10:30 AM', topic: 'IP Modeling', speaker: 'Sachin Jayaswal' },
      { time: '11:00-12:15 PM', topic: 'Branch-and-Bound', speaker: 'Manu Gupta' },
      { time: '12:20-1:00 PM', topic: 'Valid Inequalities, Cutting Plane Method', speaker: 'Yogesh Agarwal' },
      { time: '2:30-3:10 PM', topic: 'Valid Inequalities, Cutting Plane Method', speaker: 'Yogesh Agarwal' },
      { time: '3:15-4:30 PM', topic: 'Polyhedral theory', speaker: 'Guneshwar' },
      { time: '4:45-6:00 PM', topic: 'Polyhedral theory (PANDA/PORTA)', speaker: 'Guneshwar' },
    ],
  },
  {
    day: 'Tue',
    date: 'June 17',
    sessions: [
      { time: '9:15-10:30 AM', topic: 'Benders Decomposition', speaker: 'Sachin Jayaswal' },
      { time: '11:00-12:15 PM', topic: 'Benders Decomposition', speaker: 'Sachin Jayaswal' },
      { time: '12:20-1:00 PM', topic: 'Column Generation', speaker: 'Faiz Hamid' },
      { time: '2:30-3:10 PM', topic: 'Column Generation', speaker: 'Faiz Hamid' },
      { time: '3:15-4:30 PM', topic: 'Column Generation', speaker: 'Faiz Hamid' },
      { time: '4:45-6:00 PM', topic: 'Computational Complexity in optimization', speaker: 'Sriram' },
    ],
  },
  {
    day: 'Wed',
    date: 'June 18',
    sessions: [
      { time: '9:15-10:30 AM', topic: 'Valid Inequalities, Cutting Plane Method', speaker: 'Yogesh Agarwal' },
      { time: '11:00-12:15 PM', topic: 'Branch-and-Price', speaker: 'Faiz Hamid' },
      { time: '12:20-1:00 PM', topic: 'Branch-and-Price', speaker: 'Faiz Hamid' },
      { time: '2:30-3:10 PM', topic: 'Branch-and-Price', speaker: 'Faiz Hamid' },
      { time: '3:15-4:30 PM', topic: 'Branch-and-Cut for VRP', speaker: 'Saurabh Chandra' },
      { time: '4:45-6:00 PM', topic: 'Hands on Branch-and-Cut for VRP in Python', speaker: 'Saurabh Chandra' },
    ],
  },
  {
    day: 'Thu',
    date: 'June 19',
    sessions: [
      { time: '9:15-10:30 AM', topic: 'Introduction to Approximation algorithms', speaker: 'Sriram' },
      { time: '11:00-12:15 PM', topic: 'Public Transport Applications', speaker: 'Narayan Rangaraj' },
      { time: '12:20-1:00 PM', topic: 'Single-Node Fixed-charge Flow Polytope', speaker: 'Guneshwar' },
      { time: '2:30-3:10 PM', topic: 'Single-Node Fixed-charge Flow Polytope', speaker: 'Guneshwar' },
      { time: '3:15-4:30 PM', topic: 'Heuristics', speaker: 'Reshma Chandrasekharan' },
      { time: '4:45-6:00 PM', topic: 'Hands on session on Heuristics', speaker: 'Reshma Chandrasekharan' },
    ],
  },
  {
    day: 'Fri',
    date: 'June 20',
    sessions: [
      { time: '9:15-10:30 AM', topic: 'Nonlinear Optimization', speaker: 'Manu Gupta' },
      { time: '11:00-12:15 PM', topic: 'Bilevel Optimization', speaker: 'Ankur Sinha' },
      { time: '12:20-1:00 PM', topic: 'Bilevel Optimization', speaker: 'Ankur Sinha' },
      { time: '2:30-3:10 PM', topic: 'Bilevel Optimization', speaker: 'Ankur Sinha' },
      { time: '3:15-4:30 PM', topic: 'Robust Optimization', speaker: 'Divya Padmanabhan' },
      { time: '4:45-6:00 PM', topic: 'Robust Optimization', speaker: 'Divya Padmanabhan' },
    ],
  },
  {
    day: 'Sat',
    date: 'June 21',
    sessions: [
      { time: '9:15-10:30 AM', topic: 'Lagrangean Relaxations', speaker: 'Shuvabrata Chakraborty' },
      { time: '11:00-12:15 PM', topic: 'Lagrangean Relaxations', speaker: 'Shuvabrata Chakraborty' },
      { time: '12:20-1:00 PM', topic: 'Submodular Optimization', speaker: 'Vishnu Narayanan' },
      { time: '2:30-3:10 PM', topic: 'Submodular Optimization', speaker: 'Vishnu Narayanan' },
      { time: '3:15-4:30 PM', topic: 'Global Optimization of Quadratic Models', speaker: 'Ashutosh Mahajan' },
      { time: '4:45-6:00 PM', topic: 'Global Optimization of Quadratic Models', speaker: 'Ashutosh Mahajan' },
    ],
  },
];

const preschoolSessions = [
  { date: 'June 06, 2026', topic: 'Basics of Optimization and Modeling', speaker: 'Shubham Keshri, IIT Kanpur' },
  { date: 'June 07, 2026', topic: 'Computational Optimization - I: Installing CPLEX', speaker: 'Guneshwar Anand, IIM Visakhapatnam' },
  { date: 'June 08, 2026', topic: 'Computational Optimization - II: Calling CPLEX from C/C++ programs', speaker: 'Guneshwar Anand, IIM Visakhapatnam' },
  { date: 'June 09, 2026', topic: 'Theoretical Foundations of the Simplex Algorithm', speaker: 'Shubham Keshri, IIT Kanpur' },
  { date: 'June 10, 2026', topic: 'Review of Simplex Method and Interpreting the Simplex Tableau', speaker: 'Prof Yogesh Agarwal, IIM Lucknow (Retd)' },
  { date: 'June 11, 2026', topic: 'Shadow Price, Reduced Cost and Duality Theory of Linear Programming', speaker: 'Prof Yogesh Agarwal, IIM Lucknow (Retd)' },
];

const Program = () => {
  return (
    <section id="program" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Program</h2>
          <p className="section-subtitle">
            Comprehensive schedule covering theory, modeling, applications and computing in optimization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src="/images/program_overview.jpg"
              alt="Academic professional giving a mathematical presentation"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Program Overview</h3>
            <p className="text-muted-foreground mb-4">
              The LSO Summer School 2026 will feature a mix of lectures, hands-on sessions, and panel discussions focused on various aspects of optimization methods.
            </p>
            <p className="text-muted-foreground mb-6">
              The detailed schedule and program information will be announced closer to the event date.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold">
              <Calendar className="h-5 w-5" />
              June 01-06, 2026
            </div>
          </div>
        </div>

        {/* Programme Schedule */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Programme Schedule</h3>
          <p className="text-center text-muted-foreground mb-8"> Main Programme, Lecture  Hall Complex, IIT Delhi</p>

          <div className="overflow-x-auto">
            <table className="schedule-table min-w-full">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Date</th>
                  <th>Session-1 (9:15-10:30 AM)</th>
                  <th>Session-2 (11:00-12:15 PM)</th>
                  <th>Session-3.1 (12:20-1:00 PM)</th>
                  <th>Session-3.2 (2:30-3:10 PM)</th>
                  <th>Session-4 (3:15-4:30 PM)</th>
                  <th>Session-5 (4:45-6:00 PM)</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((day) => (
                  <tr key={day.day}>
                    <td className="font-semibold">{day.day}</td>
                    <td className="font-semibold">{day.date}</td>
                    {day.sessions.map((session, idx) => (
                      <td key={idx} className="text-xs">
                        <div className="font-medium">{session.topic}</div>
                        <div className="text-muted-foreground">({session.speaker})</div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pre-School Sessions */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4 text-center">Online Pre-School Sessions</h3>
          <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            Online pre-school sessions will be conducted prior to the main LSO Summer School event to help participants refresh foundational concepts and gain an introductory overview of the topics to be covered.
          </p>
          <p className="text-center mb-8">
            The pre-school sessions will take place from <strong>6:00 PM to 7:30 PM</strong>. Interested participants are requested to join via <strong>MS Teams</strong> using the meeting link shared by email.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {preschoolSessions.map((session, idx) => (
              <Card key={idx} className="p-4">
                <div className="text-red-500 font-semibold mb-2">Session {idx + 1}: {session.date}</div>
                <h4 className="font-semibold mb-2">{session.topic}</h4>
                <p className="text-sm text-muted-foreground">{session.speaker}</p>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Program;
