'use strict';

function convertToObject(sourceString) {
  const styles = {};

  const cleanedString = sourceString
    .replace(/;\s*\n\s*/g, ';\n')
    .replace(/\s*:\s*/g, ':')
    .trim();

  cleanedString.split(';').forEach((rule) => {
    const trimmedRule = rule.trim();

    if (trimmedRule.length === 0) {
      return;
    }

    const [property, ...valueParts] = trimmedRule.split(':');

    if (property && valueParts.length > 0) {
      const propertyName = property.trim();
      const value = valueParts.join(':').trim();

      styles[propertyName] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
