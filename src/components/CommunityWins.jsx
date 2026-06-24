import { motion } from 'framer-motion'
import { ThumbsUp, MessageCircle, User } from 'lucide-react'

const POSTS = [
  {
    name: 'Kevin Luk',
    win: 'Price increase from $75 to $115 in 2 months',
    body: 'Increased my prices to $115 and i am still currently booked out for the next 4 weeks. Consistently posting 2-3 times a week for the past couple months.',
    likes: 6,
    comments: 7,
  },
  {
    name: 'Wai Tat',
    win: 'Making $3.6K in 5 days',
    body: 'Did 40 clients this week! Charging $70 for cut, $90 for beard and $300-400 for perm. My goal is 5k a week!!',
    likes: 16,
    comments: 14,
  },
  {
    name: 'Brian Liao',
    win: 'Finally hit 10k/month',
    body: 'YO GUYS WE DID IT. Big thanks to Ivan and his team bro. Joined making 6k per month scaling all the way to $11150 this August.',
    likes: 9,
    comments: 11,
  },
  {
    name: 'Brooklyn Fisher',
    win: 'PRICE INCREASE ✅',
    body: 'Just got off the private call and increased my prices from 70 to 120! The work doesn\'t stop now!',
    likes: 11,
    comments: 19,
  },
]

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function CommunityWins() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20 lg:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary uppercase text-xs md:text-sm font-bold tracking-widest">
            Inside the Community
          </p>
          <h2 className="mt-3 font-heading uppercase text-3xl md:text-4xl lg:text-5xl text-white">
            Real Wins. Every Week.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {POSTS.map((post, i) => (
            <motion.div
              key={post.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="bg-white text-black rounded-2xl p-4 md:p-5 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">
                  {getInitials(post.name)}
                </div>
                <div>
                  <div className="font-bold text-sm">{post.name}</div>
                  <div className="text-xs text-[#666]">in 🚀 | Major Wins</div>
                </div>
              </div>

              <h3 className="mt-4 font-bold text-sm leading-snug">{post.win}</h3>
              <p className="mt-2 text-sm text-[#444] leading-relaxed">{post.body}</p>

              <div className="mt-4 pt-3 border-t border-[#eee] flex flex-wrap items-center justify-between gap-2 text-xs text-[#666]">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <ThumbsUp size={14} /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} /> {post.comments}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[0, 1, 2].map((j) => (
                      <div
                        key={j}
                        className="w-6 h-6 rounded-full bg-[#e5e5e5] border-2 border-white flex items-center justify-center text-[#999]"
                      >
                        <User size={12} />
                      </div>
                    ))}
                  </div>
                  <span>Last comment 2d ago</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center italic text-muted text-sm md:text-base px-2">
          These results came from barbers who joined the community and
          followed the system. Will you be next?
        </p>
      </div>
    </section>
  )
}
