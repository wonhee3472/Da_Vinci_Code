## Classification of Stars, Galaxies and Quasars based on spectral characterisitcs. 
![](Resources/How-Do-Stars-Move-Astronomy-i521234792-1184x630.webp)

### Abstract:

Apply various machine learning models to classify Stars, Galaxies, and Quasars based on spectral characteristics using 100K labeled sources from **The Sloan Digital Sky Survey** (SDSS) data release 17. 


### Purpose:

In astronomy the early classification, distribution, and cataloging of stars have helped us understand how they make up our galaxy. This classification scheme has accelerated discoveries in astronomy and astrophysics through the support of an all-sky spectroscopic observation program that uses telescopes in both hemispheres to comprehensively map the night sky, examine the history and structure of the universe, and probe the physics of black holes. 

These next-generation telescopes are predicted to significantly increase the size of source catalogs and data and it will become unfeasible for astronomers to manually verify and label individual sources.

While efforts such as Galaxy Zoo (Lintott et al. 2008, 2011) bring in many more people to help sift through data, this effort alone is not expected to be able to keep up with the source counts anticipated for the next generation of telescopes. For such large datasets, machine learning algorithms are becoming an increasingly valuable tool for analysis and data exploration. The development of such algorithms in computer science fields has accelerated rapidly in the last decade, focusing on processing large datasets in high performance computing workflows and cloud computing systems (Jones 2014; Wu et al. 2016).


### Description of the source of data:

We chose the dataset from Kaggle.com, and we chose it for its number of data points and completness of the data.

https://www.kaggle.com/datasets/fedesoriano/stellar-classification-dataset-sdss17

The dataset consists of 100k observations of space taken by the SDSS. Every observation is described by 17 feature columns and 1 class column which identifies it to be either a star, galaxy or quasar.

The columns are as follows:

1.) obj_ID = Object Identifier, the unique value that identifies the object in the image catalog used by the CAS

2.) alpha = Right Ascension angle (at J2000 epoch)

3.) delta = Declination angle (at J2000 epoch)

4.) u = Ultraviolet filter in the photometric system

5.) g = Green filter in the photometric system

6.) r = Red filter in the photometric system

7.) i = Near Infrared filter in the photometric system

8.) z = Infrared filter in the photometric system

9.) run_ID = Run Number used to identify the specific scan

10.) rereun_ID = Rerun Number to specify how the image was processed

11.) cam_col = Camera column to identify the scanline within the run

12.) field_ID = Field number to identify each field

13.) spec_obj_ID = Unique ID used for optical spectroscopic objects (this means that 2 different observations with the same spec_obj_ID must share the output class)

14.) class = object class (galaxy, star or quasar object)

15.) redshift = redshift value based on the increase in wavelength

15.) plate = plate ID, identifies each plate in SDSS

16.) MJD = Modified Julian Date, used to indicate when a given piece of SDSS data was taken

17.) fiber_ID = fiber ID that identifies the fiber that pointed the light at the focal plane in each observation

Acknowledgements:

The data released by the SDSS is under public domain. Its taken from the current data release RD17.

More information about the license: http://www.sdss.org/science/image-gallery/

SDSS Publications:

Abdurro’uf et al., The Seventeenth data release of the Sloan Digital Sky Surveys: Complete Release of MaNGA, MaStar and APOGEE-2 DATA (Abdurro’uf et al. submitted to ApJS) [arXiv:2112.02026]


### Questions we hope to answer with the data:

  -Which algorithm is best for predicting unbiased outcomes for each class?

  -Which filter in the photometric system is best for categorizing Stars/ Galaxies/ Quasars?

  -Which machine learning algorithm has the most accurate precision results?

### Description of the communication protocols:

  -Slack: We are using this platform to constantly communicate ideas, sharing updates and checking on each other.
  
  -Zoom: We use this platform to brainstorm and code together.
  
  -Google Sheets: We use this platform as a project management tool to assign taks and check off tasks for each role, as well as track progress.
  
  -Google Docs : We are using this platform to create mockups for our Read Me and share technical informationan about our dataset. 
  
  -Git Hub: We will be storing/reviewing our work (e.g., code, dataset, database) on this Github Repository.
  
 ### Dashboad
 We will be building a webpage using HTML, CSS, Bootstrap, and JavaScript and deploy it on GitHub pages. 

The Team:

1.) Crystal Tallent - crtallent

2.) Jane Mathew - java2509

3.) Sarah Abraham - abesarah

4.) Wonhee Yun - wonhee3472
