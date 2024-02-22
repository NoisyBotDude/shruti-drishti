1. Run utils.py first, specify input path, and output path, and a empty mp4path
    1. For utils.py to work, you will need to upload the source .MOV videos itself and work with them.
2. Run main.py
    1. For main.py to work, You will need to edit line 9 to ```import torchvision.transforms.functional as F_t```, there is a bug in pytorchvision rn. 
        1. this file should be in your ~/.conda/envs/your_env_name/lib/python3.11/site-packages/pytorchvideo/transforms/augmentations.py
    2. Read the comments carefully, I have yet to implement solid logic for this.
