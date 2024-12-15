import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        // validate: {
        //     validator: (value) => {
        //         return validator.isEmail(value);
        //     },
        //     message: (props) => `${props.value} is not a valid email address.`,
        // },
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    }
    //     firstName: {
    //         type: String,
    //         required: true,
    //     },
    //     lastName: {
    //         type: String,
    //         required: true,
    //     },
    //     referralCode: {
    //         type: String,
    //         unique: true,
    //     },
    //     referrerId: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'User',
    //     },
    //     gender: {
    //         type: String,
    //         enum: ['male', 'female', 'prefer not to say'],
    //         default: 'prefer not to say',
    //     },
    //     dateOfBirth: Date,
    //     country: String,
    //     city: String,
    //     description: String,
    //     jobTitle: String,
    //     profilePic: {
    //         type: String,
    //         default: '',
    //     },
    //     coverPhoto: {
    //         type: String,
    //         default: '',
    //     },
    //     views: {
    //         type: Number,
    //         default: 0,
    //     },
    //     appreciations: {
    //         type: Number,
    //         default: 0,
    //     },
    //     socialLinks: [{
    //         platform: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: 'SocialLink', // Reference to the SocialLinkOption model
    //         },
    //         url: {
    //             type: String,
    //             required: true,
    //         },
    //     }],
    //     totalPoints: {
    //         type: Number,
    //         default: 0,
    //     },
    //     // Work Preferences
    //     openToWork: {
    //         type: Boolean,
    //         default: false,
    //     },
    //     workPreference: {
    //         type: [String], // Array of work preferences, allowing users to select multiple options
    //         enum: ['freelance', 'part-time', 'full-time', 'remote', 'hybrid', 'onsite', 'contract'],
    //         default: ['freelance', 'part-time', 'full-time', 'remote', 'hybrid', 'onsite', 'contract'], // Default to 'all' to indicate flexibility if not specified
    //     },
    //     interestedInPosition: {
    //         type: String,
    //         required: true,
    //         default: 'Mid-Level',
    //     },
    //     // Salary Information
    //     currentSalary: {
    //         type: Number,
    //         required: false, // Optional for privacy reasons
    //     },
    //     expectedSalaryRangeStart: {
    //         type: Number,
    //         required: false,
    //     },
    //     expectedSalaryRangeEnd: {
    //         type: Number,
    //         required: false,
    //         // validate: {
    //         //   validator: function () {
    //         //     if (this.expectedSalaryRangeStart && this.expectedSalaryRangeEnd) {
    //         //       return this.expectedSalaryRangeStart <= this.expectedSalaryRangeEnd;
    //         //     }
    //         //     return true;
    //         //   },
    //         //   message: 'Start of salary range should be less than or equal to end.',
    //         // },
    //     },
    //     totalWorkExperience: {
    //         type: Number,
    //         default: 0,
    //     },
    //     recommendationsGiven: [{
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Recommendation',
    //     }],
    //     recommendationsReceived: [{
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Recommendation',
    //     }],
    //     skills: {
    //         type: [mongoose.Schema.Types.ObjectId],
    //         ref: 'Skills',
    //     },
    //     otp: {
    //         type: String,
    //     },
    //     otpExpires: {
    //         type: Date,
    //     },
    //     isVerified: {
    //         type: Boolean,
    //         default: false,
    //     },
    //     mobileNumber: {
    //         type: String,
    //         unique: true,
    //     },
    //     mobileVerified: {
    //         type: Boolean,
    //         default: false,
    //     },
    //     isAdmin: {
    //         type: Boolean,
    //         default: false,
    //     },
    //     enable2FA: {
    //         type: Boolean,
    //         default: false,
    //     },
    //     resumeUrl: {
    //         type: String,
    //         default: '',
    //     },
    //     resumeIsPublic: {
    //         type: Boolean,
    //         default: true,
    //     },
    //     isActive: {
    //         type: Boolean,
    //         default: true,
    //     },
    //     isBlocked: {
    //         type: Boolean,
    //         default: false,
    //     },
    //     isDeleted: {
    //         type: Boolean,
    //         default: false,
    //     },
    //     resumesDownloadedByOthers: Number, // Incremented when others download their resumes
    //     resumesDownloadedByUser: Number, // Incremented when this user downloads a resume
    //     reportCount: { type: Number, default: 0 },
    //     isGoogleUser: { type: Boolean, default: false },
    //     googleId: { type: String, unique: true },

    // }, { timestamps: true });

    // // Create a unique index on the userName field
    // userSchema.index({ userName: 1 }, { unique: true });
    // userSchema.index({ email: 1 }, { unique: true });
    // userSchema.index({ views: -1 }); // Indexing profileViews for faster querying
    // userSchema.index({ appreciations: -1 }); // Indexing profileViews for faster querying
    // userSchema.index({ recommendationsReceived: -1 }); // Indexing profileViews for faster querying
    // userSchema.index({ totalWorkExperience: 1 });
    // userSchema.index({ openToWork: 1 });
    // userSchema.index({ gender: 1 });
    // userSchema.index({ isActive: 1 });
    // userSchema.index({ isBlocked: 1 });
    // userSchema.index({ isDeleted: 1 });
    // userSchema.index({ skills: 1 });
    // userSchema.index({ workPreference: 1 });


    // userSchema.index({ firstName: "text", lastName: "text", jobTitle: "text", description: "text" });
    // userSchema.index({ expectedSalaryRangeStart: 1, expectedSalaryRangeEnd: 1 });
    // userSchema.index({ views: -1, isActive: 1 });
    // userSchema.index({ country: 1, city: 1 });
}, { timestamps: true })


export default mongoose.model('User', userSchema);