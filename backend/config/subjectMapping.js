const standardSubjectMapping = {
  'Pre Primary': {
    '1': ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Computer Science'],
    '2': ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Computer Science'],
  },
  'Primary': {
    '3': ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Computer Science'],
    '4': ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Computer Science'],
    '5': ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Computer Science'],
  },
  'Secondary': {
    '6': ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Computer Science'],
    '7': ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Computer Science'],
    '8': ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Computer Science'],
    '9': ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Computer Science'],
    '10': ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Computer Science'],
  },
  'Higher Secondary': {
    '11': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science'],
    '12': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science'],
  }
};

function getStandardsForClassCategory(classCategory) {
  if (!classCategory || !standardSubjectMapping[classCategory]) {
    return [];
  }
  return Object.keys(standardSubjectMapping[classCategory]);
}

function getSubjectsForStandard(classCategory, standard) {
  if (!classCategory || !standard || 
      !standardSubjectMapping[classCategory] || 
      !standardSubjectMapping[classCategory][standard]) {
    return [];
  }
  return standardSubjectMapping[classCategory][standard];
}

module.exports = {
  standardSubjectMapping,
  getStandardsForClassCategory,
  getSubjectsForStandard
};