export default function handler(request, response) {
  // ১. বর্তমান UTC সময় নেওয়া হলো
  const now = new Date();

  // ২. ভারতীয় সময় হলো UTC থেকে ৫ ঘণ্টা ৩০ মিনিট এগিয়ে
  //    অফসেটটিকে মিলিসেকেন্ডে গণনা করা হলো
  const istOffset = (5 * 60 + 30) * 60 * 1000;
  
  // ৩. UTC সময়ের সাথে অফসেট যোগ করে নতুন একটি Date অবজেক্ট তৈরি করা হলো
  const indianTime = new Date(now.getTime() + istOffset);

  // ৪. নতুন সময়টিকে ISO ফরম্যাটে (YYYY-MM-DDTHH:mm:ss.sssZ) পরিণত করা হলো
  const isoString = indianTime.toISOString();

  // ৫. ISO স্ট্রিং-এর শেষের 'Z' (যা UTC বোঝায়) অক্ষরটিকে '+05:30' দিয়ে পরিবর্তন করা হলো
  //    যাতে এটি পরিষ্কারভাবে ভারতীয় সময় হিসেবে চিহ্নিত হয়।
  const finalIndianTimeString = isoString.slice(0, -1) + "+05:30";

  // ৬. চূড়ান্ত JSON রেসপন্স পাঠানো হলো
  response.status(200).json({
    time: finalIndianTimeString,
    timezone: 'Asia/Kolkata (IST)',
  });
}
