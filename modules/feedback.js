async function getFeedback(reactionsSummary) {
  let totalScore = 0;

  const reactionScores = {
      like: 1,
      love: 2,
      haha: 1,
      wow: 1,
      sad: -1,
      angry: -2,
  };

  Object.keys(reactionScores).forEach(reactionType => {
      const reactionCount = reactionsSummary[`total${reactionType.charAt(0).toUpperCase() + reactionType.slice(1)}s`];
      totalScore += (reactionScores[reactionType] || 0) * reactionCount;
  });

  let feedback = '';
  if (totalScore > 0) {
      feedback = 'Votre sentiment sur les réseaux sociaux semble plutôt positif ces derniers temps.';
  } else if (totalScore < 0) {
      feedback = 'Votre sentiment sur les réseaux sociaux semble plutôt négatif ces derniers temps.';
  } else {
      feedback = 'Votre sentiment sur les réseaux sociaux semble neutre ces derniers temps.';
  }

  return { totalScore, feedback };
}

module.exports = getFeedback;
