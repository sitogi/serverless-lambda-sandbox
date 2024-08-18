export const handle = async () => {
  try {
    console.log('Hello World!');
  } catch (error) {
    const msg = `エラー: ${error instanceof Error ? error.message : 'unknown error'}`;
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: msg,
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'fire!!' }),
  };
};
