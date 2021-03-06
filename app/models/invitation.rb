class Invitation < ActiveRecord::Base

  belongs_to :inviter, class_name: 'User', foreign_key: 'inviter_id'
  has_many :coteacher_classroom_invitations, dependent: :destroy

  TYPES = {coteacher: 'coteacher', school: 'school'}
  STATUSES = {pending: 'pending', accepted: 'accepted', rejected: 'rejected'}





end
