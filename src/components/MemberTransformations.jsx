import { motion } from 'framer-motion'
import { User } from 'lucide-react'

const MEMBERS = [
  {
    name: 'Hoku',
    fromTo: ['190', '233K followers'],
    story:
      'Hoku was making $2K a month when the Maui wildfires burned his house down and wiped out his entire clientele. He had to start from zero, no location, no momentum, no online presence. He joined our program and built a personal brand instead of chasing clients. Grew to 233K followers, and rebuilt to $15K a month.',
    before: { posts: '13', stat: '190', statLabel: 'Followers', following: '17', username: 'Hoku Arnold' },
    after: { posts: '37', stat: '232K', statLabel: 'Followers', following: '433', username: 'hokuarnold' },
  },
  {
    name: 'Rayan',
    fromTo: ['260', '16.7K followers'],
    story:
      'Rayan was 21 years old, 8 years into cutting hair, and charging $28 a cut with 400 followers. He joined with a clear goal: become the most known barber in his city. He hit 16.8K followers and $14.7K/month, and was awarded the highest-charging barber in the HTB Mastermind.',
    before: { posts: 'N/A', stat: '260', statLabel: 'Followers', following: 'N/A', username: 'Rayan' },
    after: { posts: 'N/A', stat: '16.7K', statLabel: 'Followers', following: 'N/A', username: 'Rayan' },
  },
  {
    name: 'Kevin',
    fromTo: ['7', '138K subscribers'],
    story:
      "Kevin was a San Jose barber with a YouTube channel with 7 subscribers. He wasn't invisible because he lacked skill. He was invisible because he hadn't built a personal brand yet. He now has 138K YouTube subscribers, charging $115 per cut.",
    before: { posts: '3 videos', stat: '7', statLabel: 'Subscribers', following: '@klukcuts', username: 'Kevin Luk' },
    after: { posts: '123 videos', stat: '138K', statLabel: 'Subscribers', following: '@klukcuts', username: 'Kevin Luk' },
  },
  {
    name: 'Kent',
    fromTo: ['2K', '104K followers'],
    story:
      'Kent had been cutting for about a year, charging $35, and barely moving the needle online. He joined to conquer his fears and level up his personal brand. He went from 2,047 followers to 104K and became the go-to barber in Seattle.',
    before: { posts: '8', stat: '2,047', statLabel: 'Followers', following: '903', username: 'Kent / Barber' },
    after: { posts: '572', stat: '104K', statLabel: 'Followers', following: '815', username: 'kentinfocus / SEATTLE BARBER' },
  },
]

function ProfileMock({ data, theme }) {
  const isDark = theme === 'before'
  return (
    <div
      className={`flex-1 flex flex-col items-center justify-center gap-4 p-6 sm:p-8 ${
        isDark ? 'bg-[#1a1a1a]' : 'bg-white'
      }`}
    >
      <div
        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${
          isDark ? 'bg-[#2a2a2a] text-muted' : 'bg-[#f1f1f1] text-[#999]'
        }`}
      >
        <User size={24} />
      </div>
      <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-black'}`}>
        {data.username}
      </span>
      <div className="flex w-full justify-around text-center">
        <div>
          <div className={`font-bold text-lg ${isDark ? 'text-white' : 'text-black'}`}>
            {data.posts}
          </div>
          <div className={`text-xs ${isDark ? 'text-muted' : 'text-[#666]'}`}>Posts</div>
        </div>
        <div>
          <div className={`font-bold text-lg ${isDark ? 'text-primary' : 'text-[#DC2626]'}`}>
            {data.stat}
          </div>
          <div className={`text-xs ${isDark ? 'text-muted' : 'text-[#666]'}`}>
            {data.statLabel}
          </div>
        </div>
        <div>
          <div className={`font-bold text-lg ${isDark ? 'text-white' : 'text-black'}`}>
            {data.following}
          </div>
          <div className={`text-xs ${isDark ? 'text-muted' : 'text-[#666]'}`}>Following</div>
        </div>
      </div>
    </div>
  )
}

function MemberCard({ member, index }) {
  const [before, after] = member.fromTo
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="mb-16 sm:mb-20 last:mb-0"
    >
      <h3 className="text-center font-heading uppercase text-xl sm:text-3xl leading-tight text-white">
        {member.name} went from{' '}
        <span className="text-primary font-bold">{before}</span> to{' '}
        <span className="text-primary font-bold">{after}</span>
      </h3>
      <p className="mt-4 text-muted text-sm sm:text-base leading-relaxed max-w-[640px] mx-auto text-center px-2">
        {member.story}
      </p>

      <div className="mt-8 rounded-2xl overflow-hidden flex flex-col md:flex-row border border-border max-w-3xl mx-auto">
        <div className="flex-1 flex flex-col">
          <div className="bg-primary text-white text-center font-bold uppercase text-sm py-2.5">
            Before
          </div>
          <ProfileMock data={member.before} theme="before" />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="bg-[#DC2626] text-white text-center font-bold uppercase text-sm py-2.5">
            After
          </div>
          <ProfileMock data={member.after} theme="after" />
        </div>
      </div>
    </motion.div>
  )
}

export default function MemberTransformations() {
  return (
    <section className="relative bg-[#0a0a0a]/70 px-5 py-16 md:px-8 md:py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#DC2626]/3 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto">
        <p className="text-muted uppercase text-xs md:text-sm font-semibold tracking-widest text-center">
          Meet Our Members
        </p>
        <h2 className="mt-3 font-heading uppercase text-3xl md:text-4xl lg:text-5xl text-white text-center leading-tight">
          The top barbers today
          <br />
          used to look just like you.
        </h2>

        <div className="mt-12 md:mt-16">
          {MEMBERS.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
