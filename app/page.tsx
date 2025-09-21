import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import CaseStudiesHome from './CaseStudiesHome'
import { EMAIL, ABOUTME } from './data'
import { CaseStudy } from './data';

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex > 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


async function getCaseStudiesFromPublic(): Promise<CaseStudy[]> {
  const publicCaseStudiesDir = path.join(process.cwd(), 'public', 'case-study-images');
  try {
    const caseStudyImages = fs.readdirSync(publicCaseStudiesDir)
      .filter(file => file.endsWith('.png'));

    const shuffledImages = shuffleArray(caseStudyImages);

    const numberOfImages = getRandomInt(4, 6);
    const selectedImages = shuffledImages.slice(0, numberOfImages);

    const caseStudiesWithDims = await Promise.all(
      selectedImages.map(async (imageFile: string) => {
        const imagePath = path.join(publicCaseStudiesDir, imageFile);
        const metadata = await sharp(imagePath).metadata();
        const name = imageFile.split(/[-.]/)[0];
        const link = `/case-studies/${name}`;
        const image = `/case-study-images/${imageFile}`;

        return {
          id: imageFile,
          name,
          link,
          image,
          description: "",
          width: metadata.width,
          height: metadata.height
        };
      })
    );
    return caseStudiesWithDims as CaseStudy[];
  } catch (error) {
    console.error("Could not read the case-study-images directory or get image dimensions. Please create the 'public/case-study-images' directory and add your case study images.", error);
    return [];
  }
}

export default async function Personal() {
  const caseStudies = await getCaseStudiesFromPublic();

  return <CaseStudiesHome caseStudies={caseStudies} email={EMAIL} aboutme={ABOUTME} />
}