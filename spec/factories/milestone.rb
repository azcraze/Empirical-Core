FactoryBot.define do
  factory :milestone do
    sequence(:name) { |n| "Example Milestone #{n}" }

    factory :view_lessons_tutorial_milestone do
      name { 'View Lessons Tutorial' }
    end

    factory :complete_diagnostic_milestone do
      name { 'Complete Diagnostic' }
    end

    factory :publish_customized_lesson_milestone do
      name { 'Publish Customized Lesson' }
    end

    factory :complete_customized_lesson_milestone do
      name { 'Complete Customized Lesson' }
    end
  end
end
