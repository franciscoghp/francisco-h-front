export async function share(data: ShareData) {
  try {
    await navigator.share(data);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}