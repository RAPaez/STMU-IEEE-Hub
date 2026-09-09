import React from 'react';
import { Link } from 'react-router-dom';
import {
  getNextEvent,
  formatEventDate,
  formatTimeRange,
  eventTypeLabel,
} from '../services/events';

const Home: React.FC = () => {
  const nextEvent = getNextEvent();

  return (
    <div className="min-h-screen">
      {/* Hero — leads with the next thing happening, not a mission statement */}
      <section className="bg-gradient-to-br from-ieee-primary to-ieee-secondary text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            IEEE St. Mary's Hub
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl text-white/90">
            The student chapter for engineering and computer science at St. Mary's
            University. We run hands-on workshops, build things together, and put
            the code on GitHub.
          </p>

          {nextEvent ? (
            <div className="bg-white/10 backdrop-blur-sm border border-white/25 rounded-lg p-6 max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-ieee-accent mb-2">
                Next up · {eventTypeLabel[nextEvent.type]}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                {nextEvent.title}
              </h2>
              <dl className="text-white/90 space-y-1 mb-5">
                <div className="flex gap-2">
                  <dt className="sr-only">Date</dt>
                  <dd>{formatEventDate(nextEvent.date)}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="sr-only">Time</dt>
                  <dd>{formatTimeRange(nextEvent.startTime, nextEvent.endTime)}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="sr-only">Location</dt>
                  <dd>{nextEvent.location}</dd>
                </div>
              </dl>
              <p className="text-white/85 mb-6">{nextEvent.description}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/events" className="btn-secondary text-lg px-8 py-3">
                  See all events
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-ieee-primary hover:bg-gray-100 font-medium text-lg px-8 py-3 rounded-lg transition-colors duration-200 text-center"
                >
                  Join the chapter
                </Link>
              </div>
            </div>
          ) : (
            /* Empty state: an invitation to act, not an apology */
            <div className="bg-white/10 backdrop-blur-sm border border-white/25 rounded-lg p-6 max-w-2xl">
              <h2 className="text-2xl font-bold mb-3">
                Next semester's schedule is being planned
              </h2>
              <p className="text-white/85 mb-6">
                Nothing is on the calendar right now. Email us and we'll let you
                know as soon as meetings resume.
              </p>
              <Link
                to="/contact"
                className="bg-white text-ieee-primary hover:bg-gray-100 font-medium text-lg px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
              >
                Get in touch
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-ieee-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-ieee-dark dark:text-white">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-ieee-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Workshop starter code, chapter projects, and everything we build.
              </p>
              <a
                href="https://github.com/StMarys-IEEE"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit GitHub
              </a>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-ieee-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instagram</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Photos from workshops and last-minute meeting updates.
              </p>
              <a
                href="https://www.instagram.com/stmu_ieee/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Follow Us
              </a>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-ieee-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Events</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Workshops, competitions, and the full meeting schedule.
              </p>
              {/* Was linking to /about, which had no event information */}
              <Link to="/events" className="btn-primary">
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
