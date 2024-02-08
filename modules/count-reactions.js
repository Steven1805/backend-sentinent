async function countReactions (posts) {
  const reactionsSummary = {
    totalLikes: 0,
    totalLoves: 0,
    totalHahas: 0,
    totalWows: 0,
    totalSads: 0,
    totalAngrys: 0,
    totalReactions: 0
  }

  posts.forEach(post => {
    // Total sum for each reaction
    reactionsSummary.totalLikes += post.like.summary.total_count
    reactionsSummary.totalLoves += post.love.summary.total_count
    reactionsSummary.totalHahas += post.haha.summary.total_count
    reactionsSummary.totalWows += post.wow.summary.total_count
    reactionsSummary.totalSads += post.sad.summary.total_count
    reactionsSummary.totalAngrys += post.angry.summary.total_count

    // Total sum of all reactions
    reactionsSummary.totalReactions +=
        post.like.summary.total_count +
        post.love.summary.total_count +
        post.haha.summary.total_count +
        post.wow.summary.total_count +
        post.sad.summary.total_count +
        post.angry.summary.total_count
  })

  return reactionsSummary
}

module.exports = countReactions
