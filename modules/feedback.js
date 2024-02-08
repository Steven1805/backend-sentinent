async function getFeedback (reactionsSummary) {
  let totalScore = 0

  const reactionScores = {
    like: 1,
    love: 2,
    haha: 1,
    wow: 1,
    sad: -1,
    angry: -2
  }

  Object.keys(reactionScores).forEach(reactionType => {
    const reactionCount = reactionsSummary[`total${reactionType.charAt(0).toUpperCase() + reactionType.slice(1)}s`]
    totalScore += (reactionScores[reactionType] || 0) * reactionCount
  })

  let feedback = ''
  if (totalScore > 0) {
    feedback = 'Your sentiment score is influenced by the types and quantity of reactions on your posts. Your positive interactions outweigh the negative ones, your posts are radiating positivity! Your audience loves engaging with your content.'
  } else if (totalScore < 0) {
    feedback = 'Your sentiment score is influenced by the types and quantity of reactions on your posts. Negative interactions have a higher impact, some of your posts may be causing concern. Consider addressing any issues and fostering a more positive community.'
  } else {
    feedback = 'Your sentiment score is influenced by the types and quantity of reactions on your posts. You have an equal balance of positive and negative interactions,, your posts are maintaining a neutral sentiment. Spice things up with diverse content to keep your audience engaged.'
  }

  return { totalScore, feedback }
}

module.exports = getFeedback
