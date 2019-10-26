export const generateAnswersPayload = (answersObj, textareaText, originalSurveyData) => ({
	comment: textareaText,
	answers: originalSurveyData.questions
		.map(question => {
			const { id } = question;
			return {
				...question,
				value: answersObj[id] || false,
			};
		})
});